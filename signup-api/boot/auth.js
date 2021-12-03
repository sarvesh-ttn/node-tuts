const bcrypt = require("bcryptjs");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const FACEBOOK_APP_ID=288807026494764;
const FACEBOOK_APP_SECRET="6de6379fa59e226af5a45d23390152a8";

const User = require('../model/User')

 module.exports=()=>{
      passport.use(new localStrategy({
    usernameField: 'email',
    // passwordField: 'myPassword'
  },
   async function(username, password, done) {
        try {
            const fetchedUser = await User.findOne({ email: username });
            console.log(username,password,fetchedUser);

            // User not found
            if (!fetchedUser) {
                return done(null, false, { message: "Incorrect Email" });
            }

            // Passwords don't match
            const validPassword = await bcrypt.compare(
                password,
                fetchedUser.myPassword
            );
            if (!validPassword) {
                return done(null, false, {
                    message: "Incorrect Password.",
                });
            }

            done(null, fetchedUser);
        } catch (err) {
            done(err);
        }
    }
  ));
  passport.use(
    new FacebookStrategy(
        {
            clientID: FACEBOOK_APP_ID,
            clientSecret: FACEBOOK_APP_SECRET,
            callbackURL: "/auth/facebook/callback",
            profileFields: ["id", "displayName", "email", "gender"],
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log("Profile", profile);

            try {
                const fetchedUser = await User.findOne({
                    userId: profile.id,
                });

                // Login with existing user
                if (fetchedUser) {
                    console.log("Fetched User", fetchedUser);
                    return done(null, fetchedUser);
                }

                // Create a new user
                const createdUser = await User.create({
                    userId: profile.id,
                    name: profile.displayName,
                    email: profile.emails ? profile.emails[0].value : "",
                    token: accessToken,
                });

                done(null, createdUser);
            } catch (err) {
                done(err);
            }
        }
    )
);
passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});
}
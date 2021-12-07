function dateFormatter(date) {
	return date.toLocaleString("en-US", {
		day: "numeric",
		month: "short",
		year: "2-digit",
	});
}

class TimeInterval {
	start;
	end;

	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	setStart(start) {
		this.start = start;
	}

	setEnd(end) {
		this.end = end;
	}

	display() {
		console.log(`[${dateFormatter(this.start)}, ${dateFormatter(this.end)}]`);
	}
}

class IntervalSort {
	sort(intervals) {
		return intervals.sort(this.comparator);
	}

	comparator(first, second) {
		return false;
	}
}

IntervalSort.firstStrategy = new IntervalSort();
IntervalSort.firstStrategy.sort = function (intervals) {
	const updatedIntervals = [];
	intervals.reduce((newIntervals, interval) => {
		newIntervals.push(interval.start);
		newIntervals.push(interval.end);
		return newIntervals;
	}, updatedIntervals);

	// sort by calendar
	updatedIntervals.sort(this.comparator);

	// pair by intervals
	const result = [];
	updatedIntervals.reduce((resultIntervals, interval, currIdx) => {
		if (resultIntervals.length === 0) {
			
			resultIntervals.push(new TimeInterval(interval, interval));
		} else {
			

			if (currIdx !== updatedIntervals.length - 1) {
				// Get a previous date
				const previousDate = new Date(
					interval.getTime() - 24 * 60 * 60 * 1000
				);

				resultIntervals[resultIntervals.length - 1].setEnd(
					previousDate
				);


				resultIntervals.push(new TimeInterval(interval, interval));
			} else {
				resultIntervals[resultIntervals.length - 1].setEnd(interval);
			}
		}

		return resultIntervals;
	}, result);

	return result;
};

IntervalSort.firstStrategy.comparator = function (first, second) {
	return first.getTime() - second.getTime();
};

IntervalSort.secondStrategy = new IntervalSort();
IntervalSort.secondStrategy.sort = function (intervals) {
	const result = [];
	intervals.reduce((resultIntervals, interval) => {
		if (resultIntervals.length === 0) {
			resultIntervals.push(new TimeInterval(interval.start, interval.end));
		} else {
			const endDate = new Date(
				interval.start.getTime() - 24 * 60 * 60 * 1000
			);

			resultIntervals[resultIntervals.length - 1].setEnd(endDate);
			resultIntervals.push(new TimeInterval(interval.start, interval.end));
		}

		return resultIntervals;
	}, result);

	return result;
};

class IntervalsCollection {
	intervals = [];
	strategy = new IntervalSort();

	addInterval(interval) {
		this.intervals.push(interval);
	}

	setStrategy(strategy) {
		this.strategy = strategy;
	}

	showIntervals() {
		const sortedIntervals = this.strategy.sort(this.intervals);
		sortedIntervals.forEach((interval) => interval.display());
	}
}

function getIntervals() {
	return [
		new TimeInterval(new Date("01/01/18"), new Date("06/30/18")),
		new TimeInterval(new Date("02/02/18"), new Date("05/23/18")),
		new TimeInterval(new Date("03/03/18"), new Date("07/08/18")),
	];
}

function case1(intervalCollection) {
	intervalCollection.setStrategy(IntervalSort.firstStrategy);

	intervalCollection.showIntervals();
}

function case2(intervalCollection) {
	intervalCollection.setStrategy(IntervalSort.secondStrategy);

	intervalCollection.showIntervals();
}

function start() {
	const intervals = getIntervals();

	const intervalsCollection = new IntervalsCollection();
	intervals.forEach((interval) => intervalsCollection.addInterval(interval));

    console.log('first case');
	case1(intervalsCollection);
    console.log('second case');
	case2(intervalsCollection);
}

start();
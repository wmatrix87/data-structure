const Emitter =  {
	events: {},
	on: function (type, listener) {
		this.events[type] = this.events[type] || [];
		this.events[type].push(listener);
	},
	emit: function (type) {
		if (this.events[type]) {
			this.events[type].forEach((listener) => {
				listener();
			});
		}
	}
};

module.exports = Emitter;

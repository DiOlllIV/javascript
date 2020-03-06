export const tasks = [
    { text: 'Buy milk', done: false, dateStart: new Date('Feb 23, 2020'), dateEnd: undefined },
    { text: 'Pick up Tom from airport', done: false, dateStart: new Date(), dateEnd: undefined },
    { text: 'Visit party', done: false, dateStart: new Date(), dateEnd: undefined },
    { text: 'Visit doctor', done: true, dateStart: new Date(), dateEnd: new Date() },
    { text: 'Buy meat', done: true, dateStart: new Date(), dateEnd: new Date() },
];

/* const storage = {};

export const setItem = (key, value) => {
    Object.assign(storage, {
        [key]: value
    });
};

export const getItem = keyItem = key => storage[key]; */
import moment from "moment";

export const DATE_FMT = "Do MMM YYYY";

export const toDateString = (date, format) => {
    return moment(date).format(format || DATE_FMT);
};

export const getDayDuration = (from, to) => {
    return moment(to).diff(from, "days");
};
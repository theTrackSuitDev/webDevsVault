import moment from "moment"

export default function dateFormatter(dateString) {
    return moment(dateString).format("MMM-DD-YYYY");
}
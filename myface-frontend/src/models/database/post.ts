import moment from "moment";

export interface Post {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: moment.Moment;
    userId: number;
}
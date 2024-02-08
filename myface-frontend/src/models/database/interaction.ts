import moment from "moment";

export type InteractionType = "LIKE" | "DISLIKE";

export interface Interaction {
    id: number;
    interactionType: InteractionType;
    date: moment.Moment;
    userId: number;
    postId: number;
}
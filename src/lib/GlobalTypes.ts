export type ActionState   = {
    status: "SUCCESS" | "ERROR";
    error?: string;
    data?: unknown;
}
import MessageResponse from './MessageResponse';

export default interface ErrorReponse extends MessageResponse {
    stack?: string;
}

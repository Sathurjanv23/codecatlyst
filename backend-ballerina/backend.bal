import ballerina/http;

service / on new http:Listener(8080) {

    resource function get health(http:Caller caller, http:Request req) returns error? {
        check caller->respond("Backend is running");
    }
}

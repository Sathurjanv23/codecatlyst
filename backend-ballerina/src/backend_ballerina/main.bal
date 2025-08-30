
import ballerina/http;
import ballerina/mysql;

const DB_HOST = "localhost";
const DB_USER = "root";
const DB_PASS = "password"; // Change to your actual MySQL password
const DB_NAME = "boarding_finder";

mysql:Client dbClient = check new (host=DB_HOST, user=DB_USER, password=DB_PASS, database=DB_NAME);

service / on new http:Listener(8081) {
    resource function get health(http:Caller caller) returns error? {
        check caller->respond("Backend is running");
    }

    resource function post login(http:Caller caller, http:Request req) returns error? {
        json? payload = check req.getJsonPayload();
        if payload is json {
            string username = payload.username.toString();
            string password = payload.password.toString();
            stream<record{}, error> userStream = dbClient->query(
                "SELECT * FROM users WHERE username = ? AND password = ?",
                username, password
            );
            var row = userStream.next();
            if row is record{} {
                check caller->respond({"status": "success", "user": row});
            } else {
                check caller->respond({"status": "error", "message": "Invalid credentials"});
            }
        } else {
            check caller->respond({"status": "error", "message": "Invalid payload"});
        }
    }

    resource function post boardings(http:Caller caller, http:Request req) returns error? {
        json? payload = check req.getJsonPayload();
        if payload is json {
            int owner_id = payload.owner_id.toInt();
            string name = payload.name.toString();
            string location = payload.location.toString();
            string gender = payload.gender.toString();
            float rent = payload.rent.toFloat();
            string img = payload.img.toString();
            var result = dbClient->execute(
                "INSERT INTO boardings (owner_id, name, location, gender, rent, img) VALUES (?, ?, ?, ?, ?, ?)",
                owner_id, name, location, gender, rent, img
            );
            if result is error {
                check caller->respond({"status": "error", "message": result.message()});
            } else {
                check caller->respond({"status": "success"});
            }
        } else {
            check caller->respond({"status": "error", "message": "Invalid payload"});
        }
    }

    resource function put boardings(http:Caller caller, http:Request req) returns error? {
        json? payload = check req.getJsonPayload();
        if payload is json {
            int id = payload.id.toInt();
            string name = payload.name.toString();
            string location = payload.location.toString();
            string gender = payload.gender.toString();
            float rent = payload.rent.toFloat();
            string img = payload.img.toString();
            var result = dbClient->execute(
                "UPDATE boardings SET name=?, location=?, gender=?, rent=?, img=? WHERE id=?",
                name, location, gender, rent, img, id
            );
            if result is error {
                check caller->respond({"status": "error", "message": result.message()});
            } else {
                check caller->respond({"status": "success"});
            }
        } else {
            check caller->respond({"status": "error", "message": "Invalid payload"});
        }
    }

    resource function delete boardings(http:Caller caller, http:Request req) returns error? {
        json? payload = check req.getJsonPayload();
        if payload is json {
            int id = payload.id.toInt();
            var result = dbClient->execute("DELETE FROM boardings WHERE id=?", id);
            if result is error {
                check caller->respond({"status": "error", "message": result.message()});
            } else {
                check caller->respond({"status": "success"});
            }
        } else {
            check caller->respond({"status": "error", "message": "Invalid payload"});
        }
    }

    resource function get boardings(http:Caller caller, http:Request req) returns error? {
        string? query = req.getQueryParamValue("query");
        json[] result = [];
        stream<record{}, error> boardingsStream;
        if query is string {
            boardingsStream = dbClient->query(
                "SELECT * FROM boardings WHERE name LIKE ? OR location LIKE ? OR gender LIKE ?",
                "%" + query + "%", "%" + query + "%", "%" + query + "%"
            );
        } else {
            boardingsStream = dbClient->query("SELECT * FROM boardings");
        }
        check from var row in boardingsStream do {
            result.push(row);
        };
        check caller->respond(result);
    }

    resource function post register(http:Caller caller, http:Request req) returns error? {
        json? payload = check req.getJsonPayload();
        if payload is json {
            string username = payload.username.toString();
            string password = payload.password.toString();
            string email = payload.email.toString();
            var result = dbClient->execute(
                "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
                username, password, email
            );
            if result is error {
                check caller->respond({"status": "error", "message": result.message()});
            } else {
                check caller->respond({"status": "success"});
            }
        } else {
            check caller->respond({"status": "error", "message": "Invalid payload"});
        }
    }
}

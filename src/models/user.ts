export default class User{


    constructor(
        public displayName: String,
        public email: String,
        public photoURL : String | null,
        public uid: String
    ){}
}
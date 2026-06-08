import {createcontext, useContext, useState} from 'react'
export AppContext= createcontext(null);
export const AppProvider = ({children}) => {
    const[currentState, setCurrentState] = useState({username: "", loggedIn: false});
 const [contentList, setContentList] = useState([
     { id: 1, name: "Leanne Graham", email: "leanne@april.biz", phone: "1-770-736-8031" },
     { id: 2, name: "Ervin Howell", email: "shanna@melissa.tv", phone: "010-692-6593" },
 ]);
 const loggedIn = (u , p) => {
     if(u === "admin" && p === "admin") {
         setCurrentState({username: "", loggedIn: true});
         return true;
     }
     return false;
 }
 const logout = ()=> {
     setCurrentState({username: "", loggedIn: false});
     const addContent = (newc) => {
         setContentList([{...contentList,
             newc, Id:Date.now}]);
     };
 }
 return (
     <AppContext.provider value={[currentState, setCurrentState, loggedIn,logout]}></AppContext.provider>
     {children});
}
export default AppContext = () => {}
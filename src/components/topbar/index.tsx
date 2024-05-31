import React, { useEffect, useState, useContext } from "react";
import './style.css';
import { AppContext, IAppContext } from "../../context/AppContext";
import Immagine from '../../img/logo-removebg-preview.png';


function Topbar() {

    const [contData, setContData] = useState<string>('');
   const [contTitleData, setContTitleData] = useState<string>('');
   const {jsonData, setJsonData} = useContext(AppContext) as IAppContext

    function addData(input:string) {
        setContData(input);   
    }
    
   function addTitle(input:string) {
       setContTitleData(input);
   }
   
  
    
    function save() {
        if(jsonData){
            const obj = {
                id: jsonData?.length + 1,
                title: contTitleData,
                body: contData,
            }
            let data = jsonData
            data.push(obj)
            setJsonData([...data])
            canc()
            
        }
    }

    function canc() {
        setContData('');
        setContTitleData('');
    }

 const [isClicked, setIsClicked] = useState(false);

 const show = () => {
    setIsClicked(!isClicked);
 }
 if(!isClicked === true) {
    return (
        <div className="topbar">
            <div className='imgs'>
                <img src={Immagine} alt="Logo" />
            </div>
            <label className="checkbox">
            <input type="checkbox" checked={isClicked} onChange={show}></input>
            <span className="checkmark"></span>
            </label>
        </div>
    )
 } else {
    return (
        <div className="topbar">
            <div className='imgs'>
                <img src={Immagine} alt="Logo" />
            </div>
            <label className="checkbox">
                <input type="checkbox" id="checkbox" checked={isClicked} onChange={show}></input>
                <span className="checkmark"></span>
                <div className="pub">
                    <textarea className="title" placeholder="Scrivi il titolo..." value={contTitleData} onChange={(event) => addTitle(event.target.value)}></textarea>
                    <textarea className="testo" placeholder="Scrivi il tuo post..." value={contData} onChange={(event) => addData(event.target.value)}></textarea>
                    <button className="add" onClick={() => save()}>PUBBLICA</button>
                </div>
            </label>
        </div>
    )
 }
}


export default Topbar;



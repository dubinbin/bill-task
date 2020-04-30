import React, { useEffect } from 'react'
import style from './index.module.less'
import DataPicker from './components/datePicker'
import TypeList from './components/typeList'

import TimeIcon from './images/time.png'
import noteClose from './images/note-close.png'
import address from './images/address.png'
import closeBtn from './images/x.png'
import { useHistory } from 'react-router'
 
function AddRecord() {

    const Ihostory = useHistory()

    useEffect(() => {
        console.log('123')
    }, [])

    const gotoHome = () => {
        Ihostory.replace('/')
    }

    return (
        <div className={style.AddRecord}>
            <div className={style.switchBar}>
                {/* <div className={style.switchBarItem}>
                    支出
                </div>
                <div className={style.switchBarItem}>
                    收入
                </div> */}

                <div className={style.closeBtn}>
                    <img src={closeBtn} onClick={() => gotoHome()} alt=""/>
                </div>

                <TypeList/>


                <div className={style.noteDetail}>

                    <div className={style.selectTime}>
                        <img src={TimeIcon} alt="" className={style.selectTimeIcon}/>
                        <DataPicker/>
                    </div>

                    <div className={style.selectTime}>
                        <img src={noteClose} alt="" className={style.selectTimeIcon}/>
                        
                    </div>

                    <div className={style.selectTime}>
                        <img src={address} alt="" className={style.selectTimeIcon}/>
                        
                    </div>


                    <div className={style.submitBtn}>保存</div>

                </div>
            </div>
        </div>
    )
}

export default React.memo(AddRecord)
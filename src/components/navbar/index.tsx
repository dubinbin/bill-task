import React, { useState, useEffect, useCallback } from 'react'
import style from './index.module.less'

import indexIcon from './images/index.png'
import indexActiveIcon from './images/index_active.png'

import financialIcon from './images/financial.png'
import financialActiveIcon from './images/financial_active.png'

import RecordIocn from './images/record.png'
import SettingIcon from './images/setting.png'
import AddBtn from './images/add.png'
import SettingIconActive from './images/setting_active.png'
import Record_active from './images/record_active.png'
import { useLocation, useHistory } from 'react-router'

export function NavBar() {
    const [active, setActive] = useState<string>('home')
    const route = useLocation();
    const history = useHistory()

    useEffect(() => {
        const routeList = ['home', 'record', 'addrecord', 'financial', 'setting']

        routeList.some(v => {
            route.pathname.indexOf(v) > -1 && setActive(v)
        })

    }, [route.pathname])

    const changeItem = useCallback((item: string) => {
        history.push(item)
    }, [])

    return (
        <div className={style.navbar}>
            <div className={style.recordIocn} onClick={() => changeItem('/home')}>
                {active === 'home' ? <img src={indexActiveIcon}/> :  <img src={indexIcon} alt=""/>}
            </div>

            <div className={style.recordIocn} onClick={() => changeItem('/record')}>
                {active === 'record' ? <img src={Record_active}/> :  <img src={RecordIocn} alt=""/>}
            </div>

            <div className={style.addBtn} onClick={() => changeItem('/addrecord')}>
                <img src={AddBtn} alt=""/>
            </div>

            <div className={style.recordIocn} onClick={() => changeItem('/financial')}>
                {active === 'financial' ? <img src={financialActiveIcon}/> :  <img src={financialIcon} alt=""/>}
            </div>

            <div className={style.settingIcon} onClick={() => changeItem('/setting')}>
                {active === 'setting' ? <img src={SettingIconActive} alt=""/> : <img src={SettingIcon} alt=""/>}
            </div>
        </div>
    )
}
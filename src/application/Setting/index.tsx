import React from 'react'
import style from './index.module.less'
import arrow from './images/arrow.png'

function SettingPage() {
    return (
        <div className={style.SettingPage}>
            <div className={style.bg}>
                <div className={style.fakeblock}></div>
                <div className={style.avatarInfo}>
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3807230834,1316248905&fm=26&gp=0.jpg" alt=""/>
                </div>

                <div className={style.nickname}>Raymond Du</div>

                <div className={style.nianshi}>不积硅步无以至，不积小流无以成江海</div>
            </div>
            

            <div className={style.settingWrap}>
                <div className={style.settingItem}>
                    <div className={style.settingblockleft}>我的账号</div>
                    <div className={style.arrow}><img src={arrow} alt=""/></div>
                </div>
                <div className={style.settingItem}>
                    <div className={style.settingblockleft}>问题反馈</div>
                    <div className={style.arrow}><img src={arrow} alt=""/></div>
                </div>
                <div className={style.settingItem}>
                    <div className={style.settingblockleft}> 退出</div>
                    <div className={style.arrow}><img src={arrow} alt=""/></div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(SettingPage)
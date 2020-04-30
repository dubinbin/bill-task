import React from 'react'

function financialPage() {
    return (
        <div className="financialPage" onClick={() => alert('占nav功能，没有开发23333')}>
            <img style={{width: '100%'}} src={require('./images/f.png')} alt=""/>
        </div>
    )
}

export default React.memo(financialPage)
// tslint:disable-next-line
const allModules = require.context('./types', true, /\.(png)$/);


const IconListModules: IconListModules = {}

interface IconListModules {
    [key: string]: any
}


allModules.keys().forEach((item: string) => {
    const key = item.replace('./', '').replace('.png', '')
    IconListModules[key.toUpperCase()] = allModules(item).default || allModules(item)
})

export default IconListModules
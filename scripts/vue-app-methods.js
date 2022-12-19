/* global postMessageAPI, XLSX, GameMaster, appMethodsUI, appMethodsIV, appMethodsInit, appMethodsQuery, appMethodsUtils, appMethodsSearch, domtoimage */

var appMethods = {
  saveLocalConfig () {
    if (this.inited === false) {
      return false
    }
    
    let data = {}
    data = JSON.stringify(this.db.localConfig)
    localStorage.setItem(this.cacheKey, data)
    // console.log(data)
  },
  loadLocalConfig: function () {
    
    let projectFileListData = localStorage.getItem(this.cacheKey)
    if (!projectFileListData) {
      return false
    }
    
    try {
      projectFileListData = JSON.parse(projectFileListData) 
    }
    catch (e) {
      console.error(e)
      return false
    }
      
    for (let key in projectFileListData) {
      this.db.localConfig[key] = projectFileListData[key]
    }
  },
  ...appMethodsTest
}
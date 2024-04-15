class CataloguePage {

    get iPhone15ProProductLink (){
        return $('body > div.scrollroot.frame-ideal > div.frame-ideal__body > div > div > div.layout-browse__main > div.layout-products > div > div:nth-child(1) > div > a');
    }
}

export default new CataloguePage();
const MiAqara = require('./libs/MiAqara');

let miAqaraSDK = {
    _miAqara: null,
    _start: false,
    create (gateways, opts) {
        this._miAqara = new MiAqara(gateways, opts);
        this.extend();
    },
    start () {
        this._miAqara.start();
        this._start = true;
    },
    extend () { // 初始化后再添加更多接口
        let miAqara = this._miAqara;
        let gatewayHelper = miAqara.gatewayHelper;
        let deviceHelper = miAqara.deviceHelper;
        
        this.parser = miAqara.parser;
        this.getGatewayBySid = gatewayHelper.getBySid.bind(gatewayHelper);
        this.getGatewayList = gatewayHelper.getGatewayList.bind(gatewayHelper);
        this.controlLightPower = gatewayHelper.controlLightPower.bind(gatewayHelper);
        this.controlLightHLS = gatewayHelper.controlLightHLS.bind(gatewayHelper);
        this.controlLightRGB = gatewayHelper.controlLightRGB.bind(gatewayHelper);
        this.controlMid   = gatewayHelper.controlMid.bind(gatewayHelper);
        this.getDeviceBySid = deviceHelper.getBySid.bind(deviceHelper);
        this.getDevicesByGatewaySid = deviceHelper.getDevicesByGatewaySid.bind(deviceHelper);
        this.getDevicesByGatewaySidAndModel = deviceHelper.getDevicesByGatewaySidAndModel.bind(deviceHelper);
        this.getDevicesByModel = deviceHelper.getDevicesByModel.bind(deviceHelper);
        this.getDeviceList = deviceHelper.getDeviceList.bind(deviceHelper);
        this.change = deviceHelper.change.bind(deviceHelper);
        this.read   = deviceHelper.read.bind(deviceHelper);
        this.readAll = deviceHelper.readAll.bind(deviceHelper);
        this.readGateway = deviceHelper.readGateway.bind(deviceHelper);
    }
};

// 收敛暴露的接口
module.exports = miAqaraSDK;
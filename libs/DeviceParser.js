/**
 * 子设备报文解析
 */

const DEVICE_MAP = {
    'gateway': {name:'Gateway', name_cn:'网关'},
    'magnet': {name:'ContactSensor', name_cn:'门窗磁传感器'},
    'motion': {name:'MotionSensor', name_cn:'人体感应'},
    'switch': {name:'Button', name_cn:'按钮'},
    'sensor_ht': {name:'TemperatureAndHumiditySensor', name_cn:'温度湿度传感器'},
    'ctrl_neutral1': {name:'SingleSwitch', name_cn:'单按钮墙壁开关'},
    'ctrl_neutral2': {name:'DuplexSwitch', name_cn:'双按钮墙壁开关'},
    'ctrl_ln1': {name:'SingleSwitchLN', name_cn:'单按钮墙壁开关零火版'},
    'ctrl_ln2': {name:'DuplexSwitchLN', name_cn:'双按钮墙壁开关零火版'},
    '86sw1': {name:'SingleButton86', name_cn:'86型无线单按钮开关'},
    '86sw2': {name:'DuplexButton86', name_cn:'86型无线双按钮开关'},
    'plug': {name:'PlugBase', name_cn:'插座'},
    '86plug': {name:'PlugBase86', name_cn:'86型墙壁插座'},
    'cube': {name:'MagicSquare', name_cn:'魔方'},
    'smoke': {name:'SmokeDetector', name_cn:'烟雾警报器'},
    'natgas': {name:'NatgasDetector', name_cn:'天然气警报器'},
    'curtain': {name:'ElectricCurtain', name_cn:'电动窗帘'},
    'sensor_magnet.aq2': {name:'ContactSensor2', name_cn:'门磁感应 第二代'},
    'sensor_motion.aq2': {name:'MotionSensor2', name_cn:'人体感应 第二代'},
    'sensor_switch.aq2': {name:'Button2', name_cn:'按钮 第二代'},
    'weather.v1': {name:'TemperatureAndHumiditySensor2', name_cn:'温度湿度传感器 第二代'},
    'sensor_wleak.aq1': {name:'WaterDetector', name_cn:'水浸传感器'}
};

const STATUS = {
    OPEN: 'open',
    CLOSE: 'close',
    MOTION: 'motion', // 有人移动
    CLICK: 'click',
    DOUBLE_CLICK: 'double_click',
    BOTH_CLICK: 'both_click', // 左右键同时按
    ON: 'on',
    OFF: 'off'
};

let DeviceParser = {
    STATUS: STATUS,
    getNameByModel (model) {
        if (DEVICE_MAP.hasOwnProperty(model)) {
            return DEVICE_MAP[model];
        }
    }
};

module.exports = DeviceParser;
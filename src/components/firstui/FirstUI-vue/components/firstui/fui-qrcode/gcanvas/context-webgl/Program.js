// 本文件由FirstUI授权予安徽理工大学（会员ID： 403  4，营业执照号：12  34 0 0  0  04  85 3 1 9  9 59 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import {getTransferedObjectUUID} from './classUtils';

const name = 'WebGLProgram';

function uuid(id) {
    return getTransferedObjectUUID(name, id);
}

export default class WebGLProgram {
    className = name;

    constructor(id) {
        this.id = id;
    }

    static uuid = uuid;

    uuid() {
        return uuid(this.id);
    }
}
import {PageConfig} from 'gap-front-page-config';
import {Request} from 'gap-front-request';

export function trans(str) {
    const request = new Request();
    const pageConfig = new PageConfig();
    const transGroupStr = window.sessionStorage.getItem('transGroup');
    const localeKey = pageConfig.get('localeKey');
    //const localeKey = pageAttr('localeKey');

    if (transGroupStr) {
        const transGroup = JSON.parse(transGroupStr);
    
        if (transGroup === undefined) {
            return `:${str}`;
        }
    
        if (transGroup[str] === undefined) {
            if (arguments.length > 1) {
                for (let i = 1; i < arguments.length; i++) {
                    str = str + `-%${i}$s`;
                }
            }
    
            request.postJson(pageConfig.get('create-trans-group'), {
                key: str,
                group: 'js',
                localeKey: localeKey
            });
        }
    
        if (arguments.length > 1) {
            let replaceStr = transGroup[str];
            for (let i = 1; i < arguments.length; i++) {
                replaceStr = replaceStr.replace(`%${i}$s`, arguments[i]);
            }
            return replaceStr;
        }
    
        return transGroup[str];
    }

    if (!window.sessionStorage.getItem('isPostTransGroup')) {
        window.sessionStorage.setItem('isPostTransGroup', 1);
        request.postJson(pageConfig.get('list-trans-group'), {localeKey: localeKey, group: 'js'}).then(
            data => {
                window.sessionStorage.setItem('transGroup', JSON.stringify(data));
            }
        );
    }

    return `:${str}`;
}

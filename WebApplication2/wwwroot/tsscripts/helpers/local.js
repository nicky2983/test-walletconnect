var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var local;
if (typeof window !== "undefined" && typeof window.localStorage !== "undefined") {
    local = window.localStorage;
}
export function setLocal(key, data) {
    var jsonData = JSON.stringify(data);
    if (local) {
        local.setItem(key, jsonData);
    }
}
export function getLocal(key) {
    var data = null;
    var raw = null;
    if (local) {
        raw = local.getItem(key);
    }
    if (raw && typeof raw === "string") {
        try {
            data = JSON.parse(raw);
        }
        catch (error) {
            return null;
        }
    }
    return data;
}
export function removeLocal(key) {
    if (local) {
        local.removeItem(key);
    }
}
export function updateLocal(key, data) {
    var localData = getLocal(key) || {};
    var mergedData = __assign(__assign({}, localData), data);
    setLocal(key, mergedData);
}
//# sourceMappingURL=local.js.map
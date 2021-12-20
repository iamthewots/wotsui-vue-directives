import {
    ClassManagerSettings,
    IntersectionManagerSettings,
    TypewriterSettings,
} from "wui-api";

export interface ManageClassBindingValue
    extends ClassManagerSettings,
        IntersectionManagerSettings {
    [prop: string]: any;
}

export interface ManageIntersectionBindingValue
    extends IntersectionManagerSettings {
    [prop: string]: any;
}

export interface TypewriteBindingValue extends TypewriterSettings {
    [prop: string]: any;
}

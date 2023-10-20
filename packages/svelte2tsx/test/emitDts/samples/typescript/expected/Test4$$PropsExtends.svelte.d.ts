import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        b?: () => void;
    } & {
        /**
         * comment is preserved
         */
        a: string;
    } & {
        /**
         * comment is also preserved
         */
        c: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type Test4PropsExtendsProps = typeof __propDef.props;
export type Test4PropsExtendsEvents = typeof __propDef.events;
export type Test4PropsExtendsSlots = typeof __propDef.slots;
export default class Test4PropsExtends extends SvelteComponentTyped<Test4PropsExtendsProps, Test4PropsExtendsEvents, Test4PropsExtendsSlots> {
}
export {};

<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import Test3$$Props from './Test3$$Props.svelte';
    
    interface $$Props extends ComponentProps<Test3$$Props> {
        /**
         * comment is also preserved
         */
         c: string;
    }
    export function b() {}
</script>

{$$props}
/// <reference types="react" />
declare const useSyncState: (initValue: any) => (import("react").MutableRefObject<null> | ((value: any) => void))[];
export default useSyncState;

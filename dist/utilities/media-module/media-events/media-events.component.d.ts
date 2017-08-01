import { EventEmitter, OnInit } from '@angular/core';
import { IOutputBindingOptions } from '../../interfaces/IOutputBindingOptions';
export declare abstract class MediaEventsComponent implements OnInit {
    protected mediaElement: HTMLMediaElement;
    onAbort: EventEmitter<{}>;
    onCanPlay: EventEmitter<{}>;
    onCanPlayThrough: EventEmitter<{}>;
    onDurationChange: EventEmitter<{}>;
    onEmptied: EventEmitter<{}>;
    onEncrypted: EventEmitter<{}>;
    onEnded: EventEmitter<{}>;
    onError: EventEmitter<{}>;
    onInterruptBegin: EventEmitter<{}>;
    onInterruptEnd: EventEmitter<{}>;
    onLoadedData: EventEmitter<{}>;
    onLoadedMetadata: EventEmitter<{}>;
    onLoadStart: EventEmitter<{}>;
    onPause: EventEmitter<{}>;
    onPlay: EventEmitter<{}>;
    onPlaying: EventEmitter<{}>;
    onProgress: EventEmitter<{}>;
    onRateChange: EventEmitter<{}>;
    onSeeked: EventEmitter<{}>;
    onSeeking: EventEmitter<{}>;
    onStalled: EventEmitter<{}>;
    onSuspend: EventEmitter<{}>;
    onTimeUpdate: EventEmitter<{}>;
    onVolumeChange: EventEmitter<{}>;
    onWaiting: EventEmitter<{}>;
    onAbortOptions: IOutputBindingOptions;
    onCanPlayOptions: IOutputBindingOptions;
    onCanPlayThroughOptions: IOutputBindingOptions;
    onDurationChangeOptions: IOutputBindingOptions;
    onEmptiedOptions: IOutputBindingOptions;
    onEncryptedOptions: IOutputBindingOptions;
    onEndedOptions: IOutputBindingOptions;
    onErrorOptions: IOutputBindingOptions;
    onInterruptBeginOptions: IOutputBindingOptions;
    onInterruptEndOptions: IOutputBindingOptions;
    onLoadedDataOptions: IOutputBindingOptions;
    onLoadedMetadataOptions: IOutputBindingOptions;
    onLoadStartOptions: IOutputBindingOptions;
    onPauseOptions: IOutputBindingOptions;
    onPlayOptions: IOutputBindingOptions;
    onPlayingOptions: IOutputBindingOptions;
    onProgressOptions: IOutputBindingOptions;
    onRateChangeOptions: IOutputBindingOptions;
    onSeekedOptions: IOutputBindingOptions;
    onSeekingOptions: IOutputBindingOptions;
    onStalledOptions: IOutputBindingOptions;
    onSuspendOptions: IOutputBindingOptions;
    onTimeUpdateOptions: IOutputBindingOptions;
    onVolumeChangeOptions: IOutputBindingOptions;
    onWaitingOptions: IOutputBindingOptions;
    eventListeners: {
        [name: string]: {
            eventEmitter: EventEmitter<any>;
            options: IOutputBindingOptions;
        };
    };
    constructor(mediaElement: HTMLMediaElement);
    ngOnInit(): void;
    play(): void;
    private applyEventListeners();
}

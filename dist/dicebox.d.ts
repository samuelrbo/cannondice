/// <reference types="cannon" />
import { AfterDiceRollCallback, BeforeDiceRollCallback, NotationGetter, DiceBoxCallback } from './callbacks';
import { Light, Mesh, Renderer, Scene, Vector2 } from 'three';
import { Material, World } from 'cannon';
import { DiceFactory } from './dicefactory';
import { Die } from './die';
import { DieVector } from './dievector';
export declare class DiceBox {
    private diceFactory;
    animateSelector: boolean;
    barrierBodyMaterial: Material;
    callback: DiceBoxCallback;
    deskBodyMaterial: Material;
    desk: Mesh;
    dice: Die[];
    light: Light;
    renderer: Renderer;
    rolling: boolean;
    scale: number;
    scene: Scene;
    useAdaptiveTimestamp: boolean;
    world: World;
    private ambientLightColor;
    private aspect;
    private camera;
    private clientSize;
    private iteration;
    private lastTime;
    private mouseStart;
    private mouseTime;
    private pane;
    private running;
    private size;
    private windowSize;
    constructor(diceFactory: DiceFactory, container: HTMLElement, dimensions: ClientRect);
    bindMouse(container: HTMLElement, notationGetter: NotationGetter, beforeRoll: BeforeDiceRollCallback, afterRoll: AfterDiceRollCallback): void;
    bindThrow(button: any, notationGetter: NotationGetter, beforeRoll: BeforeDiceRollCallback, afterRoll: AfterDiceRollCallback): void;
    clear(): void;
    drawSelector(): void;
    findDieAtMousePosition(ev: MouseEvent | TouchEvent): any;
    reinit(container: HTMLElement, dimensions: ClientRect): void;
    roll(vectors: DieVector[], values: any, callback: any): void;
    throwDice(vector: Vector2, boost: number, dist: number, notationGetter: NotationGetter, beforeRoll: BeforeDiceRollCallback, afterRoll: AfterDiceRollCallback): void;
    private emulateThrow();
    private createBarrier(pos, axis, angle);
    private generateVectors(notation, vector, boost);
    private addDice(sides, pos, velocity, angle, axis);
    private isThrowFinished();
    private __animate(threadid);
    private initRoll(vectors);
    private shiftDieFaces(die, value, res);
    private __selectorAnimate(threadid);
    private startThrow(notationGetter, beforeRoll, afterRoll);
    private getMousePosition(ev);
}

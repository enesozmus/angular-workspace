import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperaturePipe',
  // standalone: true,
  // pure: false,
})
export class TemperaturePipe implements PipeTransform {

  // 🟦
  // 🟦🟦
  // transform(value: any, ...args: any[]) {
  //   return value + ' - transformed';
  // }

  // 🟦
  // 🟦🟦
  // transform(value: string | number, ...args: any[]) {
  //   let val: number;
  //   if (typeof value === 'string') {
  //     val = parseFloat(value);
  //   } else {
  //     val = value;
  //   }
  //   const outputTemp = val * (9 / 5) + 32;
  //   return `${outputTemp} °F`;
  // }

  // 🟦
  // 🟦🟦
  transform(
    value: string | number | null,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ) {
    if (!value) {
      return value;
    }
    console.log('here 2');

    let val: number;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp: number;

    if (inputType === 'cel' && outputType === 'fah') {
      outputTemp = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val;
    }

    let symbol: '°C' | '°F';

    if (!outputType) {
      symbol = inputType === 'cel' ? '°C' : '°F';
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F';
    }

    return `${outputTemp.toFixed()} ${symbol}`;
  }
}



/**
 * 🟥
 * 🟥🟥
 * 🟥🟥🟥
 * By default, all pipes are considered pure, which means that it only executes when a primitive input value (such as a String, Number, Boolean, or Symbol) or a changed object reference (such as Array, Object, Function, or Date).
 * Pure pipes offer a performance advantage because Angular can avoid calling the transformation function if the passed value has not changed.
 * As a result, this means that mutations to object properties or array items are not detected unless the entire object or array reference is replaced with a different instance.
 * 
 * Pipes are pure by default.
 * When true, the pipe is pure, meaning that the transform() method is invoked only when its input arguments change.
 * If the pipe has internal state (that is, the result depends on state other than its arguments), set pure to false. In this case, the pipe is invoked on each change-detection cycle, even if the arguments have not changed.
 */
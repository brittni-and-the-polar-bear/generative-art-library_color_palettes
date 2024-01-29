/*
 * Copyright (C) 2023-2024 Brittni Watkins.
 *
 * This file is a part of brittni and the polar bear's Generative Art Library,
 * which is released under the GNU Affero General Public License, Version 3.0.
 * You may not use this file except in compliance with the license.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. See LICENSE or go to
 * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 */

import {StringMap} from '@batpb/genart-base';
import {PaletteColor} from "./palette-color";

const colors: StringMap<PaletteColor> = new StringMap<PaletteColor>();

function addColor(color: PaletteColor): void {
    const key: string = color.hexString;
    colors.setUndefinedKey(key, color, `color ${key} already exists in palette colors.`);
}

import {_bb010b} from "./colors/bb010b";
addColor(_bb010b);
export {_bb010b};

export {colors};
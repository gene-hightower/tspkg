// tspkg - package to test CI and stuff

// Copyright (C) 2023 Gene Hightower <gene@digilicious.com>

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, version 3.

const world = "world";

export function
hello(who: string = world): string
{
    return `Hello ${who}!`;
}

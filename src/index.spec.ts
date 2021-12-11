/*
 * Copyright Firefly Semantics Corporation. All Rights Reserved. DO NOT REMOVE OR ALTER THIS FILE
 * HEADER OR COPYRIGHT NOTICES.
 */
 import { hello } from '@fs/index'

 test('should say Hola', ()=> {
    expect(hello('Hola')).toContain('Hola');
})
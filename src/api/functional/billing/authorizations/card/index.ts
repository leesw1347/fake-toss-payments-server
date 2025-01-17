/**
 * @packageDocumentation
 * @module api.functional.billing.authorizations.card
 */
//================================================================
import { AesPkcs5 } from "./../../../../__internal/AesPkcs5";
import { Fetcher } from "./../../../../__internal/Fetcher";
import { Primitive } from "./../../../../Primitive";
import type { IConnection } from "./../../../../IConnection";

import type { ITossBilling } from "./../../../../structures/ITossBilling";


/**
 * 간편 결제 카드 등록하기.
 * 
 * `billing.authorizations.card.store` 는 고객이 자신의 신록 카드를 서버에 등록해두고, 
 * 매번 결제가 필요할 때마다 카드 정보를 반복 입력하는 일 없이 간편하게 결제를 
 * 진행하고자 할 때, 호출되는 API 함수이다.
 * 
 * 참고로 `billing.authorizations.card.store` 는 클라이언트 어플리케이션이 토스 
 * 페이먼츠가 제공하는 간편 결제 카드 등록 창을 사용하는 경우, 귀하의 백엔드 서버가 이를 
 * 실 서비스에서 호출하는 일은 없을 것이다. 다만, 고객이 간편 결제 카드를 등록하는 
 * 상황을 시뮬레이션하기 위하여, 테스트 자동화 프로그램 수준에서 사용될 수는 있다.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param input 간편 결제 카드 등록 정보
 * @returns 간편 결제 카드 정보
 * 
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller FakeTossBillingController.store()
 * @path POST /billing/authorizations/card
 */
export function store
    (
        connection: IConnection,
        input: Primitive<store.Input>
    ): Promise<store.Output>
{
    return Fetcher.fetch
    (
        connection,
        {
            input_encrypted: false,
            output_encrypted: false
        },
        "POST",
        `/billing/authorizations/card`,
        input
    );
}
export namespace store
{
    export type Input = Primitive<ITossBilling.IStore>;
    export type Output = Primitive<ITossBilling>;
}



//---------------------------------------------------------
// TO PREVENT THE UNUSED VARIABLE ERROR
//---------------------------------------------------------
AesPkcs5;
Fetcher;
Primitive;

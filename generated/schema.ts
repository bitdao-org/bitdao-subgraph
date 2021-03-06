// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DelegateChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DelegateChanged entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DelegateChanged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DelegateChanged", id.toString(), this);
  }

  static load(id: string): DelegateChanged | null {
    return store.get("DelegateChanged", id) as DelegateChanged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get delegator(): Bytes {
    let value = this.get("delegator");
    return value.toBytes();
  }

  set delegator(value: Bytes) {
    this.set("delegator", Value.fromBytes(value));
  }

  get fromDelegate(): Bytes {
    let value = this.get("fromDelegate");
    return value.toBytes();
  }

  set fromDelegate(value: Bytes) {
    this.set("fromDelegate", Value.fromBytes(value));
  }

  get toDelegate(): Bytes {
    let value = this.get("toDelegate");
    return value.toBytes();
  }

  set toDelegate(value: Bytes) {
    this.set("toDelegate", Value.fromBytes(value));
  }
}

export class DelegateVotesChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save DelegateVotesChanged entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DelegateVotesChanged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DelegateVotesChanged", id.toString(), this);
  }

  static load(id: string): DelegateVotesChanged | null {
    return store.get("DelegateVotesChanged", id) as DelegateVotesChanged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get delegate(): Bytes {
    let value = this.get("delegate");
    return value.toBytes();
  }

  set delegate(value: Bytes) {
    this.set("delegate", Value.fromBytes(value));
  }

  get previousBalance(): BigInt {
    let value = this.get("previousBalance");
    return value.toBigInt();
  }

  set previousBalance(value: BigInt) {
    this.set("previousBalance", Value.fromBigInt(value));
  }

  get newBalance(): BigInt {
    let value = this.get("newBalance");
    return value.toBigInt();
  }

  set newBalance(value: BigInt) {
    this.set("newBalance", Value.fromBigInt(value));
  }
}

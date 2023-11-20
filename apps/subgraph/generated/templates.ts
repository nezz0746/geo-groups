// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class StateTile extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("StateTile", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "StateTile",
      [address.toHex()],
      context
    );
  }
}

import { BigInt } from "@graphprotocol/graph-ts"
import {
  Shell,
  Approval,
  AssetIncluded,
  AssimilatorIncluded,
  FrozenSet,
  OwnershipTransfered,
  ParametersSet,
  PartitionRedeemed,
  PoolPartitioned,
  Trade,
  Transfer
} from "../generated/Shell/Shell"
import { _Approval, _AssetIncluded, _AssimilatorIncluded, _OwnershipTransfered,
_PartitionRedeemed, _Trade, _Transfer } from "../generated/schema"

export function handleApproval(event: Approval): void {
  let entity = _Approval.load(event.params.value.toHex())

  if (entity == null) {
    entity = new _Approval(event.params.value.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity._owner = event.params._owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleAssetIncluded(event: AssetIncluded): void {
  let entity = _AssetIncluded.load(event.params.weight.toHex())

  if (entity == null) {
    entity = new _AssetIncluded(event.params.weight.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.numeraire = event.params.numeraire
  entity.reserve = event.params.reserve
  entity.weight = event.params.weight
  entity.save()
}

export function handleAssimilatorIncluded(event: AssimilatorIncluded): void {
  let entity = _AssimilatorIncluded.load(event.params.reserve.toHex())

  if (entity == null) {
    entity = new _AssimilatorIncluded(event.params.reserve.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.derivative = event.params.derivative
  entity.numeraire = event.params.numeraire
  entity.reserve = event.params.reserve
  entity.assimilator = event.params.assimilator
  entity.save()
}

export function handleFrozenSet(event: FrozenSet): void {}

export function handleOwnershipTransfered(event: OwnershipTransfered): void {
  let entity = _OwnershipTransfered.load(event.params.previousOwner.toHex())

  if (entity == null) {
    entity = new _OwnershipTransfered(event.params.previousOwner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleParametersSet(event: ParametersSet): void {}

export function handlePartitionRedeemed(event: PartitionRedeemed): void {
  let entity = _PartitionRedeemed.load(event.params.value.toHex())

  if (entity == null) {
    entity = new _PartitionRedeemed(event.params.value.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.token = event.params.token
  entity.redeemer = event.params.redeemer
  entity.value = event.params.value
  entity.save()
}

export function handlePoolPartitioned(event: PoolPartitioned): void {}

export function handleTrade(event: Trade): void {
  let entity = _Trade.load(event.params.trader.toHex())

  if (entity == null) {
    entity = new _Trade(event.params.trader.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.trader = event.params.trader
  entity.origin = event.params.origin
  entity.target = event.params.target
  entity.originAmount = event.params.originAmount
  entity.targetAmount = event.params.targetAmount
  entity.save()
}

export function handleTransfer(event: Transfer): void {
  let entity = _Transfer.load(event.params.value.toHex())

  if (entity == null) {
    entity = new _Transfer(event.params.value.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

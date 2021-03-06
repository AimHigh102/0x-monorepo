import { ContractArtifact } from 'ethereum-types';

import * as AssetProxyOwner from '../../artifacts/2.0.0/AssetProxyOwner.json';
import * as DummyERC20Token from '../../artifacts/2.0.0/DummyERC20Token.json';
import * as DummyERC721Token from '../../artifacts/2.0.0/DummyERC721Token.json';
import * as ERC20Proxy from '../../artifacts/2.0.0/ERC20Proxy.json';
import * as ERC721Proxy from '../../artifacts/2.0.0/ERC721Proxy.json';
import * as Exchange from '../../artifacts/2.0.0/Exchange.json';
import * as Forwarder from '../../artifacts/2.0.0/Forwarder.json';
import * as OrderValidator from '../../artifacts/2.0.0/OrderValidator.json';
import * as WETH9 from '../../artifacts/2.0.0/WETH9.json';
import * as ZRX from '../../artifacts/2.0.0/ZRXToken.json';

export const artifacts = {
    ZRX: (ZRX as any) as ContractArtifact,
    DummyERC20Token: (DummyERC20Token as any) as ContractArtifact,
    DummyERC721Token: (DummyERC721Token as any) as ContractArtifact,
    AssetProxyOwner: (AssetProxyOwner as any) as ContractArtifact,
    Exchange: (Exchange as any) as ContractArtifact,
    WETH9: (WETH9 as any) as ContractArtifact,
    ERC20Proxy: (ERC20Proxy as any) as ContractArtifact,
    ERC721Proxy: (ERC721Proxy as any) as ContractArtifact,
    Forwarder: (Forwarder as any) as ContractArtifact,
    OrderValidator: (OrderValidator as any) as ContractArtifact,
};

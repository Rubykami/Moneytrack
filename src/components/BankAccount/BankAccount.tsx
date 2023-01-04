import '../Balanceinfo/BalanceInfo.scss'
import { bankAccount } from '../../interfaces/bankAccount'

const BankAccount: React.FC<bankAccount> = ({
    bankName,
    accountType,
    balance,
}) => {
    return (
        <div className="mainsection__bankdatasection__accountinfo__div">
            <h1 className="mainsection__bankdatasection__accountinfo__div__bankname">
                {bankName}
            </h1>
            <h2 className="mainsection__bankdatasection__accountinfo__div__bankaccountinfo">
                {accountType}
            </h2>
            <div className="mainsection__bankdatasection accountinfo__div__balance__div">
                <h1 className="mainsection__bankdatasection__accountinfo__div__balance__div__balanceinfo">
                    R$ {balance}
                </h1>
            </div>
        </div>
    )
}

export default BankAccount

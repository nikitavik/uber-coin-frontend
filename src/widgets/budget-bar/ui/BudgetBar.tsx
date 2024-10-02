import { FC } from 'react';

import { Finance } from '@entities/finance';
import { Tab } from '@headlessui/react';
import { Bar } from '@shared/bar';

type BudgetBarProps = { className?: string };

export const BudgetBar: FC<BudgetBarProps> = ({ className }) => {
    const finances = ['Expenses', 'Balance', 'Incomes'];
    const deposits = ['25 975,30 $', '30 975,30 $', '50 975,30 $'];

    return (
        <div className={className}>
            <Bar
                tabs={
                    <>
                        {finances.map((value, index) => (
                            <Tab>
                                <Finance financeType={value} deposit={deposits[index]} />
                            </Tab>
                        ))}
                    </>
                }
            />
        </div>
    );
};

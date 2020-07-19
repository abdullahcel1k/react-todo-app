import React from 'react'
import { Div, Paragraph, H5 } from '../../atoms';
import { TodoItem } from '../../../core/models/TodoItem';
import { PriorityEnums } from '../../../core/enums/PriorityEnums';

type Props = {
    header: string,
    item: TodoItem
};

const backgroundColors = {
    LOW: 'bg-secondary',
    NORMAL: 'bg-warning',
    HIGH: 'bg-danger'
};

const TaskDetailCard = (props: Props) => {
    const { header, item } = props;

    const selectBackground = () => {
        switch (item.priority) {
            case PriorityEnums.LOW:
                return backgroundColors.LOW;

            case PriorityEnums.NORMAL:
                return backgroundColors.NORMAL;

            case PriorityEnums.HIGH:
                return backgroundColors.HIGH;

            default:
                return backgroundColors.LOW;
        }
    };

    return (
        <Div className='mx-5 mt-5'>
            <Div className={`card text-center ${selectBackground()}`}>
                <Div className="card-header">
                    {header}
                </Div>
                <Div className="card-body">
                    <H5 className="card-title">{item.title}</H5>
                    <Paragraph className="card-text">{item.description}</Paragraph>
                </Div>
            </Div>
        </Div>
    )
}

export default TaskDetailCard;

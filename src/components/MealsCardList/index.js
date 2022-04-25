// ant design 
import {List, Card } from 'antd';
const { Meta } = Card;

const MealsCardList = ({mealsList, onClickMealCard}) => {
    return (
        <List grid={{ gutter: 16, column: 4 }}
            dataSource={mealsList ? mealsList : []}
            renderItem={(item, index) => (
                <List.Item key={index} onClick={() => onClickMealCard(item)}>
                    <Card hoverable
                    style={{ width: 300, padding: '0' }}
                    cover={<img alt="example" src={item.strMealThumb} />}>
                        <Meta title={item.strMeal}/>
                    </Card>
                </List.Item>
            )}
        />
    )
}

export default MealsCardList;
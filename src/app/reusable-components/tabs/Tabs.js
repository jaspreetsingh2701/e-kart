import React from 'react';
import './_tabs.scss';
class Tabs extends React.Component {
    state = {
        activeTab: 'tab1'
    };

    tabOnClick = (e) => {
        if (e && e.currentTarget && e.currentTarget.id) {
            this.setState({
                activeTab: e.currentTarget.id
            })
        }
    }

    render() {
        const { activeTab } = this.state;
        const { rowDirection = 'f-c' } = this.props;
        const { tabOnClick } = this;
        return (
            <div className={`tabs ${rowDirection ? 'f-r' : 'f-c'}`} activetab={activeTab}>
                {React.Children.map(this.props.children, child => {
                    const { props } = child;
                    return React.cloneElement(child, {
                        onClick: tabOnClick,
                        extraProp: 'extraProp',
                        child: child,
                        isActive: props.id === activeTab,
                        customOnClick: props.onClick
                    })
                })}
            </div>
        )
    }
}

export default Tabs;
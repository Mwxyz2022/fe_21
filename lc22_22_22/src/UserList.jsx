import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends Component {
    state = {
        curPage: 0,
    };

    goPrev = () => {
        this.setState({
            curPage: (this.state.curPage -= 1),
        });
    };

    goNext = () => {
        this.setState({
            curPage: (this.state.curPage += 1),
        });
    };

    render() {
        const itemsPerPage = 3;
        const pageNumber = this.state.curPage + 1;
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const renderUsers = this.props.users.slice(startIndex, endIndex);

        return (
            <div>
                <Pagination
                    goPrev={this.goPrev}
                    goNext={this.goNext}
                    totalItems={this.props.users.length}
                    currentPage={pageNumber}
                    itemsPerPage={itemsPerPage}
                />

                <ul className="users">
                    {renderUsers.map(user => (
                        <User {...user} key={user.name + user.age} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default UsersList;

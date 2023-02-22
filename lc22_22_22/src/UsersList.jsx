import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends Component {
    state = {
        currentPage: 1,
    };

    goPrevPage = () => {
        this.setState({
            currentPage: (this.state.currentPage -= 1),
        });
    };

    goNextPage = () => {
        this.setState({
            currentPage: (this.state.currentPage += 1),
        });
    };

    render() {
        const itemsPerPage = 3;
        const startIndex = (this.state.currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const renderUsers = this.props.users.slice(startIndex, endIndex);

        return (
            <div>
                <Pagination
                    goPrev={this.goPrevPage}
                    goNext={this.goNextPage}
                    totalItems={this.props.users.length}
                    currentPage={this.state.currentPage}
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

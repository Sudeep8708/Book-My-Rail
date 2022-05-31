const LoginDetails = (acc) => {
    const account = acc.account;
    return (
        <form className="form-entry">
            <FormField
                label="name"
                type="text"
                onChange={acc.onChangeAccount}
            />
            <FormField
                label="email"
                type="email"
                onChange={acc.onChangeAccount}
            />
            <br />
            <FormField
                label="password"
                type="password"
                onChange={acc.onChangeAccount}
            />
            <br />
            <div>
            <NavLink to="/personal" className="title">
                <input
                    type="button"
                    value="Continue"
                />
                </NavLink>
            </div>
        </form>
    );
};

declare type SendRequestProjectListingEmail = {
    from: string;
    name: string;
    message: string;
};
declare const sendRequestProjectListingEmail: ({ from, name, message }: SendRequestProjectListingEmail) => Promise<void>;
export default sendRequestProjectListingEmail;
//# sourceMappingURL=sendRequestProjectListingEmail.d.ts.map
declare type SendContactUsEmail = {
    from: string;
    name: string;
    message: string;
};
declare const sendContactUsEmail: ({ from, name, message }: SendContactUsEmail) => Promise<void>;
export default sendContactUsEmail;
//# sourceMappingURL=sendContactUsEmail.d.ts.map
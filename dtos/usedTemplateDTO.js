class UsedTemplateDTO {
    constructor({ used_template_id, usage_date, user_id, suggested_template_id, document_id }) {
        this.UsedTemplateId = used_template_id;
        this.UsageDate = usage_date;
        this.UserId = user_id;
        this.SuggestedTemplateId = suggested_template_id;
        this.DocumentId = document_id;
    }
}

module.exports = UsedTemplateDTO;

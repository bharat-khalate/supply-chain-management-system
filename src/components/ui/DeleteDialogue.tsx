"use client";
import { IDeleteDialogue } from "@/types/interface";
import { Button, Modal } from "@heroui/react";
export function DeleteDialogue({ show, cancelAction, deleteAction, render }: IDeleteDialogue) {
    return (
        <div className="flex flex-wrap gap-4">
            <Modal >
                (render?render():<Button variant="secondary">Delete</Button>)
                <Modal.Backdrop>
                    <Modal.Container size={"sm"}>
                        <Modal.Dialog>
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                Delete ?
                                <Modal.Heading>
                                </Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    Are you sure? This action can&apos;t be undone;
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button slot="close" variant="secondary" onClick={(e) => deleteAction()}>
                                    Delete
                                </Button>
                                <Button slot="close" onClick={(e) => cancelAction()}>Cancel</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
}